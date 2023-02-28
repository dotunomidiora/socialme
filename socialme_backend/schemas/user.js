export default {
    name: 'user',
    title: 'User',
    type: 'document', //each user is going to be a document
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string' //user name type is going to be a string
        },
        {
            name: 'image',
            title: 'Image',
            type: 'string' //string because it's going to be a URL
        }
    ] //an array of a few objects
}