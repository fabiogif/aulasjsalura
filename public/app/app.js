import { handleStatus } from './utils/promisesHelpers.js'
import './utils/arrayHelpers.js'
import { notasService as service } from './nota/service.js'

document.querySelector('#myButton')
    .onclick = () =>
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log)