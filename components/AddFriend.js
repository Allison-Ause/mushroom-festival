

// Add the second handler function parameter and get handleAddFriend
export default function createAddFriend(root, handlers) {
    const handleAddFriend = handlers.handleAddFriend;
    
    const form = root.querySelector('form');

    form.addEventListener('submit', (e) => {
        // *** prevent the form's default behavior of changing the browser page
        e.preventDefault();
        // create a formData object
        const formData = new FormData(form);
        handleAddFriend(formData.get('name'));
        // call the handler with the "name" value from the formData
    });

    return () => { };
}