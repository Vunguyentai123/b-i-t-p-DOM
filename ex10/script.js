function updateItemContents() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.textContent = 'Updated item';
    });
}
document.getElementById('updateButton').addEventListener('click', updateItemContents);