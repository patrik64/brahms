import {parse} from "https://denopkg.com/ThauEx/deno-fast-xml-parser/mod.ts";

const fileList = await Deno.readTextFile("./list.txt");

const xmlFiles = fileList.split('\n');
const works_json:any = [];
const events_json:any = [];

let counter:number = 0;
let counterEvent:number = 0;

for(let i = 0; i < xmlFiles.length; i++) {

    const xmlFile = xmlFiles[i];

    if(xmlFile.length > 0) {
        
        const fileName = "./xml/" + xmlFile;
        const xml = await Deno.readTextFile(fileName);

        const parsed = parse(xml, {
            attrNodeName: "attr", 
            ignoreAttributes : false,
            textNodeName: "text",
            attributeNamePrefix : ""
        });

        let work = null; 
        if(parsed && parsed.mei && parsed.mei.workList && parsed.mei.workList.work) {
            work = parsed.mei.workList.work;
        } else if(parsed && parsed.mei && parsed.mei.meiHead && parsed.mei.meiHead.workList && parsed.mei.meiHead.workList.work) {
            work = parsed.mei.meiHead.workList.work;
        }

        if(work) {
            counter = counter + 1;

            const identifier = work.identifier.text;

            const prefix = identifier.substring(0, identifier.indexOf(' '));
            const opus = identifier.substring(identifier.indexOf(' ') + 1);

            const work_json:any = {};

            work_json["id"] = (counter).toString();
            work_json["n"] = work.attr.n;
            work_json["identifier"] = work.identifier.text;
            work_json["prefix"] = prefix;
            work_json["opus"] = opus;
            work_json["title"] = work.title;

            let positions:any = [];
            let versions:any = [];
            let components:any = [];
            
            //positions
            if(work.perfMedium && work.perfMedium.perfResList && work.perfMedium.perfResList.perfResList && work.perfMedium.perfResList.perfResList) {
                
                if(Array.isArray(work.perfMedium.perfResList.perfResList.perfRes)) {
                    positions = [...work.perfMedium.perfResList.perfResList.perfRes];
                } else {
                    positions.push(work.perfMedium.perfResList.perfResList.perfRes);
                }
            }
            else if(work.expressionList && work.expressionList.expression ) {
                if(Array.isArray(work.expressionList.expression)) {
                    for(let i = 0; i < work.expressionList.expression.length; i++) {
                        const exp = work.expressionList.expression[i];
                        const versionTitle = exp.title;
                        versions.push(versionTitle);

                        if(exp.perfMedium && exp.perfMedium.perfResList && exp.perfMedium.perfResList.perfResList && exp.perfMedium.perfResList.perfResList) {
                
                            if(Array.isArray(exp.perfMedium.perfResList.perfResList.perfRes)) {
                                positions = [...exp.perfMedium.perfResList.perfResList.perfRes];
                            } else {
                                positions.push(exp.perfMedium.perfResList.perfResList.perfRes);
                            }
                        }
                    }
                }
            }
           
            work_json["versions"] = versions;
            work_json["positions"] = positions;

            //components
            if(work.componentList && work.componentList.work) {
                if(Array.isArray(work.componentList.work)) {
                    for(let c = 0; c < work.componentList.work.length; c++) {
                        const component = work.componentList.work[c];

                        let str = "";
                        let hasTitle = false;
                        if(component.title) {
                            str += component.title;
                            hasTitle = true;
                        }

                        if(component.identifier && component.identifier.text) {
                            if(hasTitle) {
                                str += ", ";
                            }
                            str += component.identifier.text;
                        }
                        components.push(str);
                    }
                }
            }
            work_json["components"] = components;

            //events
            const workEventList:any = [];
            if(work.history && work.history.eventList && work.history.eventList.event) {
                const events = work.history.eventList.event;

                if(!Array.isArray(events)){
                    const event = events;
                    handleEvent(event, events_json);
                    workEventList.push(counterEvent);
                } else {
                    for(let e = 0; e < events.length; e++) {
                        const event = events[e];
                        handleEvent(event, events_json);
                        workEventList.push(counterEvent);
                    }
                }
            }
            work_json["events"] = workEventList;

            works_json.push(work_json);

        } else {
            console.log("ERROR --> ", fileName);
        }
    }
}

await Deno.writeTextFile("./works.json", JSON.stringify(works_json, null, 2));
await Deno.writeTextFile("./events.json", JSON.stringify(events_json, null, 2));

function handleEvent(event:any, events_json:any) {
    counterEvent = counterEvent + 1;
    const event_json:any = {};

    event_json["id"] = (counterEvent).toString();;
    event_json["workid"] = (counter).toString();

    //date
    const date_json:any = {};
    if(event.date) {
        if(event.date && event.date.attr && event.date.attr.isodate) {
            const dateIso = event.date.attr.isodate;
            const dateArr = dateIso.split('-');    
            date_json["year"] = dateArr[0];
            date_json["month"] = dateArr[1];
            date_json["day"] = dateArr[2];
        } else {
            date_json["year"] = "";
            date_json["month"] = "";
            date_json["day"] = "";
        }
        if(event.date && event.date.attr && event.date.attr.startdate) {
            date_json["datestart"] = event.date.attr.startdate.toString();
        } else {
            date_json["datestart"] = "";
        }
        if(event.date && event.date.attr && event.date.attr.enddate) {
            date_json["dateend"] = event.date.attr.enddate.toString();
        } else {
            date_json["dateend"] = "";
        }
        if(event.date && event.date && event.date.text) {
            date_json["datefull"] = event.date.text.toString();
        } else {
            date_json["datefull"] = "";
        }
        event_json["date"] = date_json;
    } else {
        date_json["year"] = "";
        date_json["month"] = "";
        date_json["day"] = "";
        date_json["datestart"] = "";
        date_json["dateend"] = "";
        date_json["datefull"] = "";
        event_json["date"] = date_json;
    }

    //geog
    if(event.geogName) {
        let place = "";
        let venue = "";
        if(Array.isArray(event.geogName)) {
            const g0 = event.geogName[0];
            const g1 = event.geogName[1];
            if(g0.text && g0.attr && g0.attr.role) {
                if(g0.attr.role === 'place') {
                    place = g0.text;
                } else {
                    venue = g0.text;
                }
            }
            if(g1.text && g1.attr && g1.attr.role) {
                if(g1.attr.role === 'place') {
                    place = g1.text;
                } else {
                    venue = g1.text;
                }
            }
        } else {
            if(event.geogName.text && event.geogName.attr && event.geogName.attr.role) {
                if(event.geogName.attr.role === 'place') {
                    place = event.geogName.text;
                } else {
                    venue = event.geogName.text;
                }
            }
        }
        event_json["place"] = place;
        event_json["venue"] = venue;
    }

    //persons
    const persons_json:any = [];

    if(event.persName) {
        if(Array.isArray(event.persName)) {
            for(let p = 0; p < event.persName.length; p++) {
                const person = event.persName[p];
                handlePerson(person, persons_json);
            }
        } else {
            handlePerson(event.persName, persons_json);
        }
    }
    event_json["persons"] = persons_json;

    //bibls
    const bibls_json:any = [];
    if(event.biblList && event.biblList.bibl) {
        if(Array.isArray(event.biblList.bibl)) {
            for(let b = 0; b < event.biblList.bibl.length; b++) {
                const bibl = event.biblList.bibl[b];
                handleBibl(bibl, bibls_json);
            }
        } else {
            handleBibl(event.biblList.bibl, bibls_json);

        }
    }
    event_json["bibls"] = bibls_json;

    events_json.push(event_json);
}

function handlePerson(person:any, persons_json:any) {
    const person_json:any = {};
    let personName = "";
    let personType = "";

    if(person.text) {
        personName = person.text;
    }

    if(person.attr && person.attr.type) {
        personType = person.attr.type;
    }

    person_json["name"] = personName;
    person_json["type"] = personType;

    persons_json.push(person_json);
}

async function handleBibl(bibl:any, bibls_json:any) {
    const bibl_json:any = {};

    if(bibl.attr && bibl.attr.type) {
        bibl_json["type"] = bibl.attr.type;
    }

    //terms
    if(bibl.term) {
        const terms_json:any = [];
        if(Array.isArray(bibl.term)) {
            for(let t = 0; t < bibl.term.length; t++){
                const term = bibl.term[t];
                const term_json:any = {};
                if(term.text) {
                    term_json["text"] = term.text;
                }
                if(term.attr && term.attr.label) {
                    term_json["label"] = term.attr.label;
                }
                terms_json.push(term_json);
            }
        } else {
            const term = bibl.term;
            const term_json:any = {};
            if(term.text) {
                term_json["text"] = term.text;
            }
            if(term.attr && term.attr.label) {
                term_json["label"] = term.attr.label;
            }
            terms_json.push(term_json);
        }

        bibl_json["terms"] = terms_json;
    }

    //genres
    /*if(bibl.genre) {
        const genres_json:any = [];
        if(Array.isArray(bibl.genre)) {
            for(let g = 0; g < bibl.genre.length; g++){
                genres_json.push(bibl.genre[g]);
            }
        } else {
            console.log(bibl.genre.text)
            genres_json.push(bibl.genre);
        }
        bibl_json["genres"] = genres_json;
    }*/

    //titles
    if(bibl.title) {
        const titles_json:any = [];
        if(Array.isArray(bibl.title)) {
            for(let t = 0; t < bibl.title.length; t++){
                const title = bibl.title[t];
                if(title.text) {
                    titles_json.push(title.text);
                }
            }
        } else {
            titles_json.push(bibl.title.text);
        }

        bibl_json["titles"] = titles_json;
    }

    //scopes
    if(bibl.biblScope) {
        const scopes_json:any = [];
        if(Array.isArray(bibl.biblScope)) {
            for(let s = 0; s < bibl.biblScope.length; s++){
                const scope = bibl.biblScope[s];
                const scope_json:any = {};
                if(scope.text) {
                    scope_json["text"] = scope.text;
                }
                if(scope.attr && scope.attr.unit) {
                    scope_json["unit"] = scope.attr.unit;
                }
                scopes_json.push(scope_json);
            }
        } else {
            const scope = bibl.biblScope;
            const scope_json:any = {};
            if(scope.text) {
                scope_json["text"] = scope.text;
            }
            if(scope.attr && scope.attr.unit) {
                scope_json["unit"] = scope.attr.unit;
            }
            scopes_json.push(scope_json);
        }

        bibl_json["scopes"] = scopes_json;
    }

    //anootations
    if(bibl.annot && bibl.annot.p) {
        const annos_json:any = [];
        if(Array.isArray(bibl.annot.p)) {
            for(let i = 0; i < bibl.annot.p.length; i++){
                const anno = bibl.annot.p[i];
                const anno_json:any = {};
                if(anno.text) {
                    anno_json["text"] = anno.text;
                }
                if(anno.attr && anno.attr.label) {
                    anno_json["label"] = anno.attr.unit;
                }
                annos_json.push(anno_json);
            }
        } else {
            const anno = bibl.annot.p;
            const anno_json:any = {};
            if(anno.text) {
                anno_json["text"] = anno.text;
            }
            if(anno.attr && anno.attr.label) {
                anno_json["label"] = anno.attr.unit;
            }
            annos_json.push(anno_json);
        }

        bibl_json["annos"] = annos_json;
    }

    //ptr
    bibl_json["ptr_label"] = "";
    bibl_json["ptr_target"] = "";
    if(bibl.ptr && bibl.ptr.attr) {
        if(bibl.ptr.attr.label) {
            bibl_json["ptr_label"] = bibl.ptr.attr.label;
        }
        if(bibl.ptr.attr.target) {
            bibl_json["ptr_target"] = bibl.ptr.attr.target;
        }

    }

    bibls_json.push(bibl_json);
}