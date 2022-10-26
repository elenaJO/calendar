import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

	const {  startDeletingEvent, hastEventSelected } = useCalendarStore()

	const { isDateModalOpen } = useUiStore()

	const handleDelete = () => {
		startDeletingEvent()
	}

	return (
		<button 
			className="btn btn-danger fab-danger"
			onClick={ handleDelete }
			style={{
				display: hastEventSelected && !isDateModalOpen ? '' : 'none'
			}}
		>
			<i className="fas fa-trash-alt"></i>
		</button>
	)
}
