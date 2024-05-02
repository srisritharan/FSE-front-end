export function LoginForm(params) {
    const handleChange = (event) => {
        let newCredentials = { ...params.credentials };
        newCredentials[event.target.name] = event.target.value;
        params.setCredentials(newCredentials);
    };

    return (
        <div className="box" style={{ maxWidth: "unset" }}>
            {/* Display below before loging in */}
            <table className="table">
                <tbody className={params.currentUser ? "hidden" : "visible"}>
                    <tr>
                        {/* <div className={params.currentUser ? "hidden" : "visible"}> */}
                        <th htmlFor="user">User Name </th>
                        <td>
                            <input
                                type="text"
                                size={10}
                                id="user"
                                name="user"
                                value={params.credentials.user}
                                onChange={handleChange}
                                placeholder={"user name"}
                            />
                        </td>
                        <th htmlFor="password"> Password </th>
                        <td>
                            <input
                                type="password"
                                size={10}
                                id="password"
                                name="password"
                                value={params.credentials.password}
                                onChange={handleChange}
                                placeholder={"password"}
                            />
                        </td>
                        {/* </div> */}
                        <td>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>
                                {params.currentUser
                                    ? `Welcome ${params.currentUser.user} !!!`
                                    : " "}
                            </span>
                        </td>
                        <td>
                            <button onClick={params.login}>
                                {params.currentUser ? "Logout" : "Login"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* Display below when logged in */}
            <table className="table">
                <tbody className={params.currentUser ? "visible" : "hidden"}>
                    <tr>
                        <td>
                            &nbsp;
                            <span style={{ fontWeight: "bold" }}>
                                {params.currentUser
                                    ? `Welcome ${params.currentUser.user} !!!`
                                    : " "}
                            </span>
                        </td>
                        <td>
                            <button onClick={params.login}>
                                {params.currentUser ? "Logout" : "Login"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};