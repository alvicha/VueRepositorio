import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const journalModule = {
    namespaced: true, //estaran capsulados del exterior
    state,
    mutations,
    actions,
    getters //Obtener informacion procesada del state
}

export default journalModule

//El store se usara de cara al modulo que voy a usar manejar o relacionar con el componente como con el directorio DayBook