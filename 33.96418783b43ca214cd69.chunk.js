webpackJsonp([33],{"/zRk":function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormArray, FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\nexport interface TabType {\n  label: string;\n  fields: FormlyFieldConfig[]\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  model = {};\n  tabs: TabType[] = [\n    {\n      label: 'Personal data',\n      fields: [\n        {\n          key: 'firstname',\n          type: 'input',\n          templateOptions: {\n            label: 'First name',\n            required: true,\n          },\n        },\n        {\n          key: 'age',\n          type: 'input',\n          templateOptions: {\n            type: 'number',\n            label: 'Age',\n            required: true,\n          },\n        },\n      ],\n    },\n    {\n      label: 'Destination',\n      fields: [\n        {\n          key: 'country',\n          type: 'input',\n          templateOptions: {\n            label: 'Country',\n            required: true,\n          },\n        },\n      ],\n    },\n    {\n      label: 'Day of the trip',\n      fields: [\n        {\n          key: 'day',\n          type: 'input',\n          templateOptions: {\n            type: 'date',\n            label: 'Day of the trip',\n            required: true,\n          },\n        },\n      ],\n    },\n  ];\n  form = new FormArray(this.tabs.map(() => new FormGroup({})));\n  options = this.tabs.map(() => <FormlyFormOptions>{});\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},FzWO:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <mat-tab-group>\n    <mat-tab *ngFor="let tab of tabs;let index = index;"\n      [label]="tab.label"\n      [disabled]="index !== 0 && !form.at(index - 1)?.valid">\n      <formly-form\n        [form]="form.at(index)"\n        [model]="model"\n        [fields]="tab.fields"\n        [options]="options[index]">\n      </formly-form>\n    </mat-tab>\n    <mat-tab label="Submit">\n      <div>\n        <button mat-raised-button class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</form>\n'},"Gwd+":function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>mat-tab-group</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>mat-tab</span> <span class="token attr-name" >*ngFor</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>let tab of tabs;let index <span class="token punctuation" >=</span> index;<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >[label]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tab.label<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>index !<span class="token punctuation" >=</span><span class="token punctuation" >=</span> 0 &amp;&amp; !form.at(index - 1)?.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span>\n        <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form.at(index)<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tab.fields<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options[index]<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>mat-tab</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>mat-tab</span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >mat-raised-button</span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>mat-tab</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>mat-tab-group</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},O9Gh:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormArray<span class="token punctuation" >,</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >interface</span> <span class="token class-name" >TabType</span> <span class="token punctuation" >{</span>\n  label<span class="token punctuation" >:</span> <span class="token keyword" >string</span><span class="token punctuation" >;</span>\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span>\n<span class="token punctuation" >}</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  model <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  tabs<span class="token punctuation" >:</span> TabType<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Personal data\'</span><span class="token punctuation" >,</span>\n      fields<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'firstname\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'First name\'</span><span class="token punctuation" >,</span>\n            required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'number\'</span><span class="token punctuation" >,</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Age\'</span><span class="token punctuation" >,</span>\n            required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Destination\'</span><span class="token punctuation" >,</span>\n      fields<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'country\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Country\'</span><span class="token punctuation" >,</span>\n            required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'Day of the trip\'</span><span class="token punctuation" >,</span>\n      fields<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span>\n          key<span class="token punctuation" >:</span> <span class="token string" >\'day\'</span><span class="token punctuation" >,</span>\n          type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n          templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n            type<span class="token punctuation" >:</span> <span class="token string" >\'date\'</span><span class="token punctuation" >,</span>\n            label<span class="token punctuation" >:</span> <span class="token string" >\'Day of the trip\'</span><span class="token punctuation" >,</span>\n            required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormArray</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>tabs<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  options <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>tabs<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token operator" >&lt;</span>FormlyFormOptions<span class="token operator" >></span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},PFyn:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("WT6e"),p=s("7DMc"),o=function(){function n(){this.model={},this.tabs=[{label:"Personal data",fields:[{key:"firstname",type:"input",templateOptions:{label:"First name",required:!0}},{key:"age",type:"input",templateOptions:{type:"number",label:"Age",required:!0}}]},{label:"Destination",fields:[{key:"country",type:"input",templateOptions:{label:"Country",required:!0}}]},{label:"Day of the trip",fields:[{key:"day",type:"input",templateOptions:{type:"date",label:"Day of the trip",required:!0}}]}],this.form=new p.FormArray(this.tabs.map(function(){return new p.FormGroup({})})),this.options=this.tabs.map(function(){return{}})}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Tabs Form",description:'\n              This is an example of Tabs form using <a href="https://material.angular.io/components/tabs/overview" target="_blank">Material Tabs</a>\n            ',component:o,files:[{file:"app.component.html",content:s("Gwd+"),filecontent:s("FzWO")},{file:"app.component.ts",content:s("O9Gh"),filecontent:s("/zRk")},{file:"app.module.ts",content:s("bpsX"),filecontent:s("xWgI")}]}]},l=function(){},u=s("INQx"),c=s("cPG/"),i=s("OGTa"),r=s("z4JO"),k=s("WhiG"),m=s("XPYZ"),d=s("CoID"),f=s("QMRz"),b=s("SSjb"),g=s("tGRr"),y=s("qwng"),v=s("UFNd"),F=s("PV5Z"),x=s("dI39"),C=s("jevj"),h=s("6GVX"),M=s("S3hu"),O=s("UJsg"),w=s("OiLZ"),T=s("cIfd"),N=s("njCa"),D=s("Xjw4"),R=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function q(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,16777216,null,null,7,"mat-tab",[],null,null,null,C.d,C.a)),t["\u0275did"](1,770048,[[1,4]],1,h.b,[t.ViewContainerRef],{disabled:[0,"disabled"],textLabel:[1,"textLabel"]},null),t["\u0275qud"](335544320,2,{templateLabel:0}),(n()(),t["\u0275ted"](-1,0,["\n      "])),(n()(),t["\u0275eld"](4,0,null,0,2,"formly-form",[],null,null,null,M.b,M.a)),t["\u0275did"](5,966656,null,0,O.a,[w.a,T.a,N.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,O.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275ted"](-1,0,["\n      "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275and"](0,null,null,0))],function(n,a){var s=a.component,t=null;n(a,1,0,0!==a.context.index&&!(null!=(t=s.form.at(a.context.index-1))&&t.valid),a.context.$implicit.label),n(a,5,0,s.model,s.form.at(a.context.index),a.context.$implicit.fields,s.options[a.context.index])},null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275bf"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[p.ControlContainer],null,null),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](6,0,null,null,17,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,C.c,C.b)),t["\u0275did"](7,3325952,null,1,h.e,[t.ElementRef,t.ChangeDetectorRef],null,null),t["\u0275qud"](603979776,1,{_tabs:1}),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275and"](16777216,null,null,1,null,q)),t["\u0275did"](11,802816,null,0,D.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](13,16777216,null,null,9,"mat-tab",[["label","Submit"]],null,null,null,C.d,C.a)),t["\u0275did"](14,770048,[[1,4]],1,h.b,[t.ViewContainerRef],{textLabel:[0,"textLabel"]},null),t["\u0275qud"](335544320,3,{templateLabel:0}),(n()(),t["\u0275ted"](-1,0,["\n      "])),(n()(),t["\u0275eld"](17,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](19,0,null,null,1,"button",[["class","btn btn-primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"])),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,11,0,s.tabs),n(a,14,0,"Submit")},function(n,a){var s=a.component;n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending),n(a,6,0,t["\u0275nov"](a,7).dynamicHeight,"below"===t["\u0275nov"](a,7).headerPosition),n(a,19,0,!s.form.valid)})}var A=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,R)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),G=s("9Sd6"),U=s("XHgV"),L=s("1T37"),j=s("+j5Y"),E=s("U/+3"),I=s("Mcof"),P=s("7u3n"),Z=s("6sdf"),z=s("z7Rf"),V=s("ItHS"),W=s("OE0E"),B=s("iLnc"),J=s("ApVT"),H=s("bkcK"),X=s("Uo70"),_=s("gsbp"),Y=s("EPl/"),Q=s("kJ/S"),K=s("j06o"),$=s("ZuzD"),nn=s("sqmn"),an=s("255V"),sn=s("ixPN"),tn=s("rK2e"),pn=function(){},on=s("bfOx"),en=s("fCQL"),ln=s("ByAW"),un=s("9N4v"),cn=s("ykPx"),rn=s("nwY2"),kn=s("TqLH"),mn=s("R2dV"),dn=s("JkuO"),fn=s("BILt"),bn=s("H69Y"),gn=s("j/TD"),yn=s("daWb"),vn=s("Dm6n"),Fn=s("8F5j"),xn=s("WIBo"),Cn=s("MjWI");s.d(a,"ConfigModuleNgFactory",function(){return hn});var hn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,c.a,i.a,r.a,k.a,m.a,d.a,f.a,b.a,g.a,y.a,v.a,F.a,x.a,A]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,D.NgLocalization,D.NgLocaleLocalization,[t.LOCALE_ID,[2,D["\u0275a"]]]),t["\u0275mpd"](6144,G.b,null,[D.DOCUMENT]),t["\u0275mpd"](4608,G.c,G.c,[[2,G.b]]),t["\u0275mpd"](4608,U.a,U.a,[]),t["\u0275mpd"](5120,L.d,L.b,[[3,L.d],t.NgZone,U.a]),t["\u0275mpd"](5120,L.g,L.f,[[3,L.g],U.a,t.NgZone]),t["\u0275mpd"](4608,j.i,j.i,[L.d,L.g,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,j.e,j.j,[[3,j.e],D.DOCUMENT]),t["\u0275mpd"](4608,j.h,j.h,[L.g,D.DOCUMENT]),t["\u0275mpd"](5120,j.f,j.m,[[3,j.f],D.DOCUMENT]),t["\u0275mpd"](4608,j.c,j.c,[j.i,j.e,t.ComponentFactoryResolver,j.h,j.f,t.ApplicationRef,t.Injector,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](5120,j.k,j.l,[j.c]),t["\u0275mpd"](4608,E.k,E.k,[U.a]),t["\u0275mpd"](4608,E.j,E.j,[E.k,t.NgZone,D.DOCUMENT]),t["\u0275mpd"](136192,E.d,E.b,[[3,E.d],D.DOCUMENT]),t["\u0275mpd"](5120,E.n,E.m,[[3,E.n],[2,E.l],D.DOCUMENT]),t["\u0275mpd"](5120,E.i,E.g,[[3,E.i],t.NgZone,U.a]),t["\u0275mpd"](4608,I.d,I.d,[U.a]),t["\u0275mpd"](135680,I.a,I.a,[I.d,t.NgZone]),t["\u0275mpd"](5120,P.b,P.c,[j.c]),t["\u0275mpd"](4608,Z.b,Z.b,[]),t["\u0275mpd"](5120,z.d,z.a,[[3,z.d],[2,V.c],W.c,[2,D.DOCUMENT]]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,J.a,J.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275i"],p["\u0275i"],[]),t["\u0275mpd"](4608,N.b,N.b,[N.a]),t["\u0275mpd"](4608,T.a,T.a,[]),t["\u0275mpd"](4608,w.a,w.a,[N.b,T.a]),t["\u0275mpd"](512,D.CommonModule,D.CommonModule,[]),t["\u0275mpd"](512,G.a,G.a,[]),t["\u0275mpd"](512,H.g,H.g,[]),t["\u0275mpd"](512,U.b,U.b,[]),t["\u0275mpd"](512,L.c,L.c,[]),t["\u0275mpd"](512,j.g,j.g,[]),t["\u0275mpd"](256,X.f,!0,[]),t["\u0275mpd"](512,X.n,X.n,[[2,X.f]]),t["\u0275mpd"](512,E.a,E.a,[]),t["\u0275mpd"](512,I.c,I.c,[]),t["\u0275mpd"](512,P.e,P.e,[]),t["\u0275mpd"](512,X.x,X.x,[]),t["\u0275mpd"](512,Z.c,Z.c,[]),t["\u0275mpd"](512,h.i,h.i,[]),t["\u0275mpd"](512,z.c,z.c,[]),t["\u0275mpd"](512,_.c,_.c,[]),t["\u0275mpd"](512,Y.b,Y.b,[]),t["\u0275mpd"](512,Q.h,Q.h,[]),t["\u0275mpd"](512,K.b,K.b,[]),t["\u0275mpd"](512,X.o,X.o,[]),t["\u0275mpd"](512,X.v,X.v,[]),t["\u0275mpd"](512,$.b,$.b,[]),t["\u0275mpd"](512,nn.c,nn.c,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,p["\u0275ba"],p["\u0275ba"],[]),t["\u0275mpd"](512,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](512,sn.a,sn.a,[]),t["\u0275mpd"](512,tn.a,tn.a,[]),t["\u0275mpd"](512,pn,pn,[]),t["\u0275mpd"](512,on.r,on.r,[[2,on.w],[2,on.o]]),t["\u0275mpd"](512,l,l,[]),t["\u0275mpd"](256,P.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),t["\u0275mpd"](256,Q.a,!1,[]),t["\u0275mpd"](1024,N.a,function(){return[{types:[{name:"formly-group",component:en.a}]},{types:[{name:"input",component:ln.a,wrappers:["fieldset","label"]},{name:"checkbox",component:un.a,wrappers:["fieldset"],defaultOptions:{templateOptions:{indeterminate:!0}}},{name:"radio",component:cn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:rn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:kn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:mn.a,wrappers:["fieldset","label"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"label",component:dn.a},{name:"description",component:fn.a},{name:"validation-message",component:bn.a},{name:"fieldset",component:gn.a},{name:"addons",component:yn.a}],manipulators:[{class:vn.a,method:"run"},{class:Fn.a,method:"run"},{class:xn.a,method:"run"}]},{types:[{name:"formly-group",component:en.a}]},{validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1024,on.m,function(){return[[{path:"",component:Cn.a,data:e}]]},[])])})},bpsX:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> MatTabsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/material/tabs\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    MatTabsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},xWgI:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { MatTabsModule } from '@angular/material/tabs';\n\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    MatTabsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}});