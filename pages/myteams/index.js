import Avatar from "../../components/Avatar"

const MyTeams = props => {

    const teams = [
        {
            id : 1,
            name : 'team5',
            teamLeader : {
                id : 5,
                firstName : 'chef',
                lastName : 'équipe',
                image : null
                
            },
            members : [
                {
                    id : 1,
                    firstName : 'student1',
                    lastName : 'etudiant1',
                    image : null
                },
                {
                    id : 5,
                    firstName : 'chef',
                    lastName : 'équipe',
                    image : null
                },
                {
                    id : 6,
                    firstName : 'membre',
                    lastName : 'membre5',
                    image : null
                },
                {
                    id : 7,
                    firstName : 'etudiant',
                    lastName : 'etudiante',
                    image : null
                }
            ]
        },
        {
            id : 1,
            name : 'team7',
            teamLeader : {
                id : 5,
                firstName : 'chef',
                lastName : 'équipe',
                image : null
            },
            members : [
                {
                    id : 1,
                    firstName : 'student1',
                    lastName : 'etudiant1',
                    image : null
                },
                {
                    id : 5,
                    firstName : 'chef',
                    lastName : 'équipe',
                    image : null
                },
                {
                    id : 6,
                    firstName : 'membre',
                    lastName : 'membre5',
                    image : null
                },
                {
                    id : 7,
                    firstName : 'etudiant',
                    lastName : 'etudiante',
                    image : null
                }
            ]
        },
        {
            id : 1,
            name : 'team6',
            teamLeader : {
                id : 5,
                firstName : 'chef',
                lastName : 'équipe',
                image : null
            },
            members : [
                {
                    id : 1,
                    firstName : 'student1',
                    lastName : 'etudiant1',
                    image : null
                },
                {
                    id : 5,
                    firstName : 'chef',
                    lastName : 'équipe',
                    image : null
                },
                {
                    id : 6,
                    firstName : 'membre',
                    lastName : 'membre5',
                    image : null
                },
                {
                    id : 7,
                    firstName : 'etudiant',
                    lastName : 'etudiante',
                    image : null
                }
            ]
        }
    ]

    return(
        <div className="h-screen w-screen bg-background text-textcolor font-xyz flex items-center justify-center">
            <div className="flex flex-row gap-16">
                {
                    teams.map ((el ,index) => {
                        return(
                            <div className="flex flex-col space-y-3 bg-gradient-to-b from-blue-50 to-blue-300 hover:bg-gradient-to-t h-[300px] w-[250px] rounded-lg border-2 border-slate-300 shadow-lg p-6 text-[17px] relative">
                                <img src="/teamStudent.jpg" className="h-full object-contain mix-blend-darken opacity-20"/>
                                <div className="absolute top-6">
                                    <div className="w-full text-center text-[23px]">{el.name}</div>
                                    {
                                        el.members.map((element) => {
                                            return (
                                                <div className="flex flex-rox space-x-2">
                                                    <Avatar firstName={element.firstName} lastName={element.lastName} image={element.image}/>
                                                    <div>{element.firstName}</div>
                                                    <div>{element.lastName}</div>
                                                    {
                                                        element.id === el.teamLeader.id ? <div className="underline">CF</div> : <div></div>
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MyTeams