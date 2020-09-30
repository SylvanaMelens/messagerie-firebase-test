import React, { useState } from 'react'

const Connexion = () => {
	const [pseudo, setPseudo] = useState('')

	const handleChange = ({ currentTarget }) => {
		setPseudo(currentTarget.value)
	}

	return (
		<>
			<div className="connexionBox">
				<form className="connexion">
					<input
						value={pseudo}
						onChange={handleChange}
						type="text"
						placeholder="Pseudo"
						required
					/>
					<button type="submit">CONNEXION</button>
				</form>
			</div>
		</>
	)
}

export default Connexion
