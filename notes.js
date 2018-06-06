console.log('notes')

module.exports.command = (argument) => {

    switch (argument) {
        
        case 'read':
            console.log('read')
            break
        case 'add':
            console.log('add')
            break  
        case 'list':
            console.log('list')
            break
            case 'list':
        console.log('delete')
            break
              
        default:
            console.log('NA')
    }
}