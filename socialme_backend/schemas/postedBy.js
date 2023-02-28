//postedBy is going to be a reference to the USER type.

export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [ { type: 'user' }]
}

