
const isAdmin = async () => {
    const response = await fetch('/admin/auth')
    return response.ok
  }
  const auth = async () => {
    if (await isAdmin()) {
      return navigateToAdmin()
    }
    navigateToUser()
  }