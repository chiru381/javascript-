// filter()
 const users = [ { name: 'Venkatesh' }, { name: 'Chinni' }, { name: 'Manjunath' } ];
 let filteredUser = users.filter((user) => user.name === 'Venkatesh');
 console.log('filtered', filteredUser);
 console.log('original', users);