const DEMO_STUDENTS=[
{id:"DA001",name:"Aarav Das",cls:"V",parent:"Rina Das",phone:"9000000001",status:"Active"},
{id:"DA002",name:"Ayesha Khatun",cls:"VI",parent:"Rahim Khatun",phone:"9000000002",status:"Active"},
{id:"DA003",name:"Rohan Roy",cls:"VII",parent:"S. Roy",phone:"9000000003",status:"Active"},
{id:"DA004",name:"Moumita Saha",cls:"VIII",parent:"P. Saha",phone:"9000000004",status:"Active"},
{id:"DA005",name:"Soham Mondal",cls:"IX",parent:"A. Mondal",phone:"9000000005",status:"Active"}];
const DEMO_TEACHERS=[
{id:"T001",name:"Anita Roy",subject:"English",cls:"V–IX",phone:"9000000011",status:"Active"},
{id:"T002",name:"Md. Rahman",subject:"Mathematics",cls:"VI–IX",phone:"9000000012",status:"Active"},
{id:"T003",name:"S. Das",subject:"Science",cls:"V–VIII",phone:"9000000013",status:"Active"},
{id:"T004",name:"P. Saha",subject:"Bengali",cls:"III–IX",phone:"9000000014",status:"Active"}];
let students=JSON.parse(localStorage.getItem("dishari_students")||"null")||DEMO_STUDENTS;
let teachers=JSON.parse(localStorage.getItem("dishari_teachers")||"null")||DEMO_TEACHERS;
let notices=JSON.parse(localStorage.getItem("dishari_notices")||"null")||[
{date:"06 Oct 2026",title:"Website Launch",text:"Dishari Academy's new school information portal is now ready for updates."},
{date:"2026–27",title:"Academic Information",text:"Please contact the school for current class, fee and academic details."},
{date:"Admission",title:"2027 Session Enquiry",text:"The supplied admission poster mentions Nursery to Class IX."}
];
function login(){if(document.getElementById("email").value && document.getElementById("password").value){localStorage.setItem("dishari_admin","1");document.getElementById("login").classList.add("hidden");document.getElementById("app").classList.remove("hidden");renderAll()}else alert("Enter demo login details.");}
function logout(){localStorage.removeItem("dishari_admin");location.reload()}
function boot(){if(localStorage.getItem("dishari_admin")){document.getElementById("login").classList.add("hidden");document.getElementById("app").classList.remove("hidden");renderAll()}document.getElementById("attDate").value=new Date().toISOString().slice(0,10)}
function show(id){document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));document.getElementById(id).classList.add("active");document.getElementById("pageTitle").textContent=document.querySelector("#"+id+" h1")?.textContent||"Dashboard";document.querySelector(".sidebar")?.classList.remove("open");}
function renderAll(){renderStudents();renderTeachers();renderAttendance();renderAdmissions();renderNotices();document.getElementById("kStudents").textContent=students.length;document.getElementById("kTeachers").textContent=teachers.length}
function renderStudents(){document.querySelector("#studentTable tbody").innerHTML=students.map(s=>`<tr><td>${s.id}</td><td><b>${s.name}</b></td><td>${s.cls}</td><td>${s.parent}</td><td>${s.phone}</td><td><span class="status">${s.status}</span></td></tr>`).join("")}
function renderTeachers(){document.querySelector("#teacherTable tbody").innerHTML=teachers.map(t=>`<tr><td>${t.id}</td><td><b>${t.name}</b></td><td>${t.subject}</td><td>${t.cls}</td><td>${t.phone}</td><td>${t.status}</td></tr>`).join("")}
function renderAttendance(){document.getElementById("attendanceBody").innerHTML=students.map((s,i)=>`<tr><td>${i+1}</td><td>${s.name}</td><td><input type="radio" name="a${i}" checked></td><td><input type="radio" name="a${i}"></td><td><input type="radio" name="a${i}"></td></tr>`).join("")}
function renderAdmissions(){document.querySelector("#admissionTable tbody").innerHTML=[["APP-2027-001","Demo Applicant","VII","Parent One","9000000101","Pending"],["APP-2027-002","Demo Applicant 2","V","Parent Two","9000000102","Review"]].map(a=>`<tr>${a.map((x,i)=>`<td>${i===5?`<b>${x}</b>`:x}</td>`).join("")}</tr>`).join("")}
function renderNotices(){document.getElementById("adminNoticeList").innerHTML=notices.map((n,i)=>`<div class="notice-admin"><b>${n.title}</b><small>${n.date}</small><p>${n.text}</p></div>`).join("");localStorage.setItem("dishari_notices",JSON.stringify(notices))}
function filterTable(id,q){document.querySelectorAll("#"+id+" tbody tr").forEach(r=>r.style.display=r.innerText.toLowerCase().includes(q.toLowerCase())?"":"none")}
function saveAttendance(){alert("Attendance saved in this demo interface. Connect a backend/database for multi-user live records.")}
function openModal(type){const title=document.getElementById("modalTitle"),form=document.getElementById("modalForm");document.getElementById("modal").classList.remove("hidden");let html="";
if(type==="student"){title.textContent="Add Student";html=`<label>Student Name<input name="name" required></label><label>Class<select name="cls"><option>Nursery</option><option>V</option><option>VI</option><option>VII</option><option>VIII</option><option>IX</option></select></label><label>Parent/Guardian<input name="parent" required></label><label>Mobile<input name="phone" required></label><button class="btn primary">Save Student</button>`}
if(type==="teacher"){title.textContent="Add Teacher";html=`<label>Name<input name="name" required></label><label>Subject<input name="subject" required></label><label>Classes<input name="cls" value="V–IX"></label><label>Mobile<input name="phone"></label><button class="btn primary">Save Teacher</button>`}
if(type==="notice"){title.textContent="Publish Notice";html=`<label>Title<input name="title" required></label><label>Date<input name="date" value="${new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}"></label><label>Message<textarea name="text" required></textarea></label><button class="btn primary">Publish Notice</button>`}
if(type==="admission"){title.textContent="New Admission Application";html=`<label>Applicant Name<input name="name" required></label><label>Class<select name="cls"><option>Nursery</option><option>V</option><option>VI</option><option>VII</option><option>VIII</option><option>IX</option></select></label><label>Parent/Guardian<input name="parent"></label><label>Mobile<input name="phone"></label><button class="btn primary">Save Application</button>`}
if(type==="fee"){title.textContent="Record Fee Payment";html=`<label>Student<input name="student" required></label><label>Amount<input name="amount" type="number" required></label><label>Payment Method<select><option>Cash</option><option>UPI</option><option>Bank</option></select></label><button class="btn primary">Save Payment</button>`}
if(type==="result"){title.textContent="Enter Marks";html=`<label>Student<input name="student" required></label><label>Subject<input name="subject" required></label><label>Marks<input name="marks" type="number" required></label><button class="btn primary">Save Marks</button>`}
form.innerHTML=html;form.dataset.type=type}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function submitModal(e){e.preventDefault();const fd=new FormData(e.target),type=e.target.dataset.type;if(type==="student"){students.push({id:"DA"+String(students.length+1).padStart(3,"0"),name:fd.get("name"),cls:fd.get("cls"),parent:fd.get("parent"),phone:fd.get("phone"),status:"Active"});localStorage.setItem("dishari_students",JSON.stringify(students))}
if(type==="teacher"){teachers.push({id:"T"+String(teachers.length+1).padStart(3,"0"),name:fd.get("name"),subject:fd.get("subject"),cls:fd.get("cls"),phone:fd.get("phone"),status:"Active"});localStorage.setItem("dishari_teachers",JSON.stringify(teachers))}
if(type==="notice"){notices.unshift({date:fd.get("date"),title:fd.get("title"),text:fd.get("text")});localStorage.setItem("dishari_notices",JSON.stringify(notices))}
closeModal();renderAll();alert("Saved successfully in this browser demo.")}
function addPhoto(e){const file=e.target.files[0];if(file)alert("Photo selected. For permanent shared gallery storage, connect the upload action to your backend/storage.")}
function saveSettings(){alert("Settings saved in this demo. Connect a backend to make them globally persistent.");}
window.addEventListener("DOMContentLoaded",boot);
