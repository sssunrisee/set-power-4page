const API_BASE = 'https://testing.sungroup.space/api'

export async function submitContactForm(data: {
  name: string
  company: string
  email: string
  phone: string
  message: string
}) {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    return await response.json()
  } catch (error) {
    console.error('Error submitting form:', error)
    throw error
  }
}

export async function getDocuments() {
  try {
    const response = await fetch(`${API_BASE}/documents`)
    if (!response.ok) {
      throw new Error('Failed to fetch documents')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching documents:', error)
    return []
  }
}

export async function getNews() {
  try {
    const response = await fetch(`${API_BASE}/news`)
    if (!response.ok) {
      throw new Error('Failed to fetch news')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}
