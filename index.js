const feature = document.querySelector('.feature-btn');
const company = document.querySelector('.company-btn');

// Menus
const featureMenu = document.querySelector('.features');
const companyMenu = document.querySelector('.company');

// Arrows
const featureArrow = document.querySelector('.featureArrow');
const companyArrow = document.querySelector('.companyArrow');

// Sidebar
const sidebar = document.querySelector('.sidebar'); 
const featureBtn = document.querySelector('.sidebar__feature');
const companyBtn = document.querySelector('.sidebar__company');

// Sidebar Dropdowns
const featureDrop = document.querySelector('.feature-drop');
const companyDrop = document.querySelector('.company-drop');

const sidebarFeatureArrow = document.querySelector('.sidebarFeatureArrow');
const sidebarCompanyArrow = document.querySelector('.sidebarCompanyArrow');

// Burger
const menuBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.sidebar__close');

// Check if open
let featureIsOpen = false;
let companyIsOpen = false;

feature.addEventListener('click', () => {
    if(!featureIsOpen) {
        featureMenu.style.display = 'flex';
        featureArrow.src = './images/icon-arrow-up.svg';
        featureIsOpen = true;
    } else {
        featureMenu.style.display = 'none';
        featureArrow.src = './images/icon-arrow-down.svg';
        featureIsOpen = false;
    }
})

company.addEventListener('click', () => {
    if(!companyIsOpen) {
        companyMenu.style.display = 'flex';
        companyArrow.src = './images/icon-arrow-up.svg';
        companyIsOpen = true;
    } else {
        companyMenu.style.display = 'none';
        companyArrow.src = './images/icon-arrow-down.svg';
        companyIsOpen = false;
    }
})

// Dropdowns feature and company
featureBtn.addEventListener('click',() => {
    if(!featureIsOpen) {
        featureDrop.style.display = 'flex';
        sidebarFeatureArrow.src = './images/icon-arrow-up.svg';
        featureIsOpen = true;
    } else {
        featureDrop.style.display = 'none';
        sidebarFeatureArrow.src = './images/icon-arrow-down.svg';
        featureIsOpen = false;
    }
})

companyBtn.addEventListener('click',() => {
    if(!companyIsOpen) {
        companyDrop.style.display = 'flex';
        sidebarCompanyArrow.src = './images/icon-arrow-up.svg';
        companyIsOpen = true;
    } else {
        companyDrop.style.display = 'none';
        sidebarCompanyArrow.src = './images/icon-arrow-up.svg';
        companyIsOpen = false;
    }
})

// Open close of sidebar
menuBtn.addEventListener('click',() => sidebar.style.display = 'flex');
menuClose.addEventListener('click',() => sidebar.style.display = 'none');