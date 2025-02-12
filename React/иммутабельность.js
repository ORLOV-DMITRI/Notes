const user = {
    id: 1,
    name: 'dmitri'
}

const user2 = {
    ...user,
    name: 'kapser',
    status: 'cat',
}
const user3 = Object.assign({}, user, {
    name: '21',
    status: 'bro'
})
const deepuser = {
    id: 1,
    name: 'dmitri',
    posts: {title: '1'}
}
const deepUser2 = {
    ...deepuser,
    posts: {
        ...deepuser.posts,
        title: '23'.
    }
}