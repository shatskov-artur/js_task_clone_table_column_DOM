'use strict';

const thead = document.querySelector('table thead tr');
const tbody = document.querySelector('table tbody');
const tfoot = document.querySelector('table tfoot tr');

[thead, tfoot].forEach((element) => {
  Array.from(element.children).forEach((child, index) => {
    if (index === 1) {
      const copy = document.createElement('th');

      copy.textContent = child.textContent;

      element.insertBefore(copy, element.lastElementChild);
    }
  });
});

Array.from(tbody.children).forEach((element) => {
  Array.from(element.children).forEach((child, index) => {
    if (index === 1) {
      const copy = document.createElement('td');

      copy.textContent = child.textContent;

      element.insertBefore(copy, element.lastElementChild);
    }
  });
});
