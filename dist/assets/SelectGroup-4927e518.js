import{d as n,_ as o,o as u,c as d,a,w as S,b as V,t as p,n as c,u as l}from"./index-a564a264.js";const f={class:"w-full"},b={__name:"SelectGroup",props:{type:String,placeholder:String,label:String,name:String,labelClasses:String,inputClasses:String,modelValue:String|Number,items:Array},emits:["update:modelValue"],setup(e,{emit:i}){const m=n(()=>o(()=>import("./Select-0fad4281.js"),["assets/Select-0fad4281.js","assets/index-a564a264.js","assets/index-15120936.css"])),t=n(()=>o(()=>import("./Label-b100419a.js"),["assets/Label-b100419a.js","assets/index-a564a264.js","assets/index-15120936.css"])),r=s=>{i("update:modelValue",s)};return(s,g)=>(u(),d("div",f,[a(l(t),{class:c(e.labelClasses)},{default:S(()=>[V(p(e.label),1)]),_:1},8,["class"]),a(l(m),{"onUpdate:modelValue":r,value:e.modelValue,class:c(e.inputClasses),placeholder:e.placeholder,name:e.name,items:e.items},null,8,["value","class","placeholder","name","items"]),a(l(t),{class:"text-2xl text-left",name:e.name},null,8,["name"])]))}};export{b as default};