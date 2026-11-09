(function(){
 const d=window.GW_CONTENT,c=d.contact;
 const serviceRoot=document.querySelector('#services-list'),serviceSelect=document.querySelector('[name=service]');
 const serviceIcons=['▦','⌂','⌂','◷','✦','◇','✣'];
 d.services.forEach((item,i)=>{
  const card=document.createElement('article');card.className='service';
  const icon=document.createElement('span');icon.className='icon';icon.setAttribute('aria-hidden','true');
  if(item[0]==='Fumigation Services')icon.innerHTML='<svg viewBox="0 0 32 32" focusable="false" aria-hidden="true"><path d="M7 23c4-2 5-6 5-10m3 10c4-2 5-6 5-10m3 10c2-1 3-3 3-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M23 5v5m-2.5-2.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
  else icon.textContent=serviceIcons[i]||'✦';
  const title=document.createElement('h3');title.textContent=item[0];const description=document.createElement('p');description.textContent=item[1];card.append(icon,title,description);serviceRoot.append(card);
  const option=document.createElement('option');option.value=item[0];option.textContent=item[0];serviceSelect.append(option);
 });
 const benefits=document.querySelector('#benefits');d.benefits.forEach(item=>{const card=document.createElement('article');card.className='benefit';card.innerHTML='<span aria-hidden="true">✦</span><h3></h3><p></p>';card.querySelector('h3').textContent=item[0];card.querySelector('p').textContent=item[1];benefits.append(card)});
 const makeClients=host=>d.clients.forEach(name=>{const item=document.createElement('div');item.className='client-name';item.setAttribute('role','listitem');item.textContent=name;host.append(item)});
 const primary=document.querySelector('#client-primary'),clone=document.querySelector('#client-clone');primary.setAttribute('role','list');clone.setAttribute('role','presentation');makeClients(primary);makeClients(clone);
 const contact=document.querySelector('#contact-data');[['TELEPHONE',c.telephone,c.telephoneLink],['WHATSAPP',c.whatsapp,c.whatsappLink],['EMAIL',c.email,c.emailLink]].forEach(([label,text,href])=>{const row=document.createElement('div');row.className='contact-item';const small=document.createElement('small');small.textContent=label;const link=document.createElement('a');link.href=href;link.textContent=text;if(label==='WHATSAPP'){link.target='_blank';link.rel='noopener noreferrer'}row.append(small,link);contact.append(row)});
 const footer=document.querySelector('#foot-contact');[['Telephone',c.telephone,c.telephoneLink],['Email',c.email,c.emailLink]].forEach(([label,text,href])=>{const link=document.createElement('a');link.href=href;link.textContent=text;link.setAttribute('aria-label',label+' '+text);footer.append(link)});
 document.querySelector('#year').textContent=new Date().getFullYear();
 const toggle=document.querySelector('.menu'),nav=document.querySelector('#navlinks');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');nav.classList.remove('open')}));
 const form=document.querySelector('#quote-form'),note=document.querySelector('#form-note');form.addEventListener('submit',event=>{event.preventDefault();if(!form.checkValidity()){form.reportValidity();note.textContent='Please complete the required fields with valid contact details.';return}const fd=new FormData(form),body=encodeURIComponent(`Name: ${fd.get('name')}\nOrganisation: ${fd.get('organisation')}\nTelephone: ${fd.get('telephone')}\nEmail: ${fd.get('email')}\nService: ${fd.get('service')}\nProperty/facility type: ${fd.get('facility')}\n\nMessage:\n${fd.get('message')}`);note.textContent='Your email app should open with the enquiry prepared. Review and send it there.';window.location.href=`${c.emailLink}?subject=${encodeURIComponent('Cleaning quotation enquiry — '+fd.get('name'))}&body=${body}`});
})();
