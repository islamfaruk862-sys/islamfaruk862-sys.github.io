const notices = JSON.parse(localStorage.getItem("dishari_notices") || "null") || [
  {date:"06 Oct 2026", title:"Website Launch", text:"Dishari Academy's new school information portal is now ready for updates."},
  {date:"2026–27", title:"Academic Information", text:"Please contact the school for current class, fee and academic details."},
  {date:"Admission", title:"2027 Session Enquiry", text:"The supplied admission poster mentions Nursery to Class IX. Confirm dates and seats directly with the school."}
];
const $ = s => document.querySelector(s);
function renderNotices(){
  const box=$("#noticeList"); if(!box) return;
  box.innerHTML=notices.map(n=>`<article class="notice"><div class="date">${n.date}</div><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.text)}</p></article>`).join("");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
document.addEventListener("DOMContentLoaded",()=>{
  renderNotices();
  $("#year").textContent=new Date().getFullYear();
  $(".menu-btn")?.addEventListener("click",()=>$(".navlinks").classList.toggle("open"));
});
