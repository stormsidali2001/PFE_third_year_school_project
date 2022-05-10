import Link from 'next/link'
import HorisontalNavbar from "../../components/HorisontalNavbar";
import StudentVerticalNavbar from "../../components/StudentVerticalNavbar";
import ModificationIcon from '../../icons/modificationIcon';
import Trash from '../../icons/Trash';

const studentList = props => {
   const data = [
       {
           Matricule : 1234568,
           Nom : "houda",
           Prénom : "houda",
           Email : "houda.hhh.jjj@esi-sba.dz",
           Promotion : "1CS"
       },
       {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
    {
        Matricule : 1234568,
        Nom : "houda",
        Prénom : "houda",
        Email : "houda.hhh.jjj@esi-sba.dz",
        Promotion : "1CS"
    },
   ]
   if(data.length === 0) return <div>Aucune donnée</div>
   const columns = [...Object.keys(data[0]).filter(el=>el!=='id')];
    return (
        <div>
            <HorisontalNavbar/>
            <StudentVerticalNavbar/>
             <div className="bg-background h-screen w-screen relative flex flex-col space-y-16 items-center justify-center font-xyz text-textcolor">
                <div className="text-[30px] mt-10">Liste des étudiants</div>
                <div className="flex flex-row space-x-24">
                     <div className="flex flex-rox space-x-4 items-center justify-center">
                         <div className='text-[18px]'>Choisir une promotion :</div>
                         <input className='h-[40px] w-[250px] rounded-full shadow-sm px-3' placeholder='Choisir une promotion ...'/>
                    </div>
                    <Link href="/addstudent1"><button className="shadow-lg h-[40px] w-[220px] text-[18px] bg-blue-300 hover:bg-blue-400 rounded-full">+ Ajouter étudiant </button></Link>
                 </div>
                <table className="bg-[#282873]/10 backdrop-blur-[8px] shadow-lg  leading-normal h-fit p-4   w-[80vw]">
                    <thead>
                        <tr  className="bg-white  rounded-[10px] h-[36px]  border-b-2 ">
                            {
                               
                                columns.map(el=>{
                                    return(
                                        <th className="text-center">{el}</th>
                                    )
                                })
                               
                               
                            }     
                             <th className="text-center">Opérations</th>
                        </tr>
                    </thead>
                    <tbody className=" ">
                        {
                            data.map(row=>{
                                return(
                                    <tr  className=" bg-white/60  rounded-[10px] border-red  border-b-2">
                                        {
                                            Object.keys(data[0]).filter(el=>el!=='id').map(col=>{
                                                return(
                                                    <td className="text-center  h-[36px] ">
                                                        {row[col]}
                                                    </td>
                                                )
                                            })
                                        }
                                        <td>
                                           <div className='flex flex-row space-x-10 items-center justify-center'>
                                                <ModificationIcon/>
                                                <Trash/>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default studentList;