export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
         name: 'postedBy',
         title:  'PostedBy',
         type: 'postedBy' 
        },
        {//fields for the actual comment
        name: 'comment',
        title:  'Comment',
        type: 'string' 
           },

    ]
}