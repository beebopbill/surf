function toggleComplete(element) {
    if (element.classList.contains('completed')) {
        element.classList.remove('completed');
    } else {
        element.classList.add('completed');
    }
}
