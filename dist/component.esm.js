function s(o){class r extends HTMLElement{connectedCallback(){let t=this.attachShadow({mode:"open"}),a=this.hasAttribute(":template"),l=this.hasAttribute(":url");(a||l)&&o.initTree(this);let{template:m,url:i}=this.attributes;m&&function(e){let c=document.getElementById(e),p=new DOMParser().parseFromString(c.innerHTML,"text/html").body.firstChild;return Promise.resolve(p)}(m.value).then(e=>{t.appendChild(e),o.initTree(t)}),i&&fetch(i.value).then(n=>n.text()).then(n=>{let e=new DOMParser().parseFromString(n,"text/html").body.firstChild;t.appendChild(e),o.initTree(t)})}}window.customElements.get("x-component")||(customElements.define("x-component",r),new r)}var f=s;export{f as default};
