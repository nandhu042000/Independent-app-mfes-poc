import {Column} from "./column-modesl"
export let column:Array<Column> = [{
    header:"Modules",
    list:{
        name:['Topics','Games','Worksheet','Homework']
    }
    },
    {
        header:"Modules attempted",
        list:{
            name:['topics','worksheet','homework']
        }
    },
    {
    header:"Questian types",
    list:{
        name:['Regular','Challenge','Timed test','Revise']
    }
},{header:"Rewards",
list:{
    name:['Sparkies']
}},
{header:"Usages",list:{
    name:['Home',"Number of days logged"]
}}
]