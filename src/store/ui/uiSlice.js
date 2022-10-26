import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		isDateModalOpen: false
	},
	reducers: {
		onOpenDateModal: (state) => {
			state.isDateModalOpen = true //como estamos trabajando con el toolkit si lo puedo mutar defrente
		},
		onCloseDateModal: (state) => {
			state.isDateModalOpen = false
		}
	}
})

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions