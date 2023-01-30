import { createHeaders } from "."

const apiURL = process.env.REACT_APP_API_URL

export const AddTranslation = async ( user, translation) => {
    try {
        const response = await fetch(`${apiURL}/${user.id}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation]
            })
        })
        
        if (!response.ok) {
            throw new Error('Could not add or update the Translation list')
        }

        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [ error.message, null]
    }
}

export const removeTranslation = async (userId) => {
    try {
        const response = await fetch(`${apiURL}/${userId}`, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            }) 
        })

        if (!response.ok) {
            throw new Error('Not able to update the translations')
        }

        const result = await response.json()
        return [ null, result]
        
    } catch (error) {
        return [error.message, null]
    }
}