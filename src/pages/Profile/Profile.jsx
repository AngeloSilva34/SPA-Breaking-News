import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"

export function Profile() {
    const { user } = useContext(UserContext)

    return <> {user.name} </>
}
