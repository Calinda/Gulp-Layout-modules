import {deleteAsync} from 'del'

export default () => {
    return deleteAsync($.path.prodFolder)
}