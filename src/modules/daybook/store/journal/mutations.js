
export const setEntries = (state, entries) => { //Estas mutaciones tienen que ser sincronas y se podrán llamar
    state.entries = [...state.entries, ...entries]
    state.isLoading = false;
}

export const updateEntry = (state, entry) => { //Estas mutaciones tienen que ser sincronas
    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    console.log({ idx });
    state.entries[idx] = entry
}

export const addEntry = (state, entry) => { //Estas mutaciones tienen que ser sincronas
    state.entries = [entry, ...state.entries]
}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter(e => e.id !== id); //Solo me filtrara un arreglo de entrada que no coincidan con el id que haya seleccionado y así se borrará
    //const idx = state.entries.map(e => e.id).indexOf(id)
    //state.entries.splice(idx, 1);
}
