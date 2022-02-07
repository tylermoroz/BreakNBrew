export default function contactUs(){
    const contactPage = document.getElementById('content');
    const info = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('h3');
    const email = document.createElement('h3');

    title.textContent = 'Contact Us';
    phone.textContent = '555-123-4567';
    email.textContent = 'breaknbrew@iamhungry.com';

    info.setAttribute('id', 'info')
    title.setAttribute('id', 'contact-title');
    phone.setAttribute('id', 'phone');
    email.setAttribute('id', 'email');

    info.classList.add('contact');
    title.classList.add('contact');
    phone.classList.add('contact');
    email.classList.add('contact');

    info.appendChild(title);
    info.appendChild(phone);
    info.appendChild(email);
    contactPage.appendChild(info);

    return contactPage;
}