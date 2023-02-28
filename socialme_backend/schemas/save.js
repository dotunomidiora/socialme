export default {
    name: 'save',
    title: 'Save',
    type: 'document',
    fields: [
        {
         name: 'postedBy',
         title:  'PostedBy',
         type: 'postedBy' 
        },
        {//linking the save to userID
        name: 'userId',
        title:  'UserId',
        type: 'string' 
        },

    ]
}