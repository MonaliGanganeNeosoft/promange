import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearErrors,getAdminAllProject,deleteProject} from '../../actions/projectAllaction';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { DELETE_PROJECT_RESET } from '../../constants/projectAllConstants';
import { Button } from 'react-bootstrap';


const SelfAdminList = ({history,params}) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const {error,projectDetails} = useSelector((state)=>state.projectDetails);


  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.projectDelete
  );

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id));
  };

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Product Deleted Successfully");
      history.push("/admin/projectDetails");
      dispatch({ type: DELETE_PROJECT_RESET });
    }
    dispatch(getAdminAllProject());
  }, [dispatch,alert,error,deleteError, history, isDeleted]);
  

  return <>
  
<div>
  <p>hii</p>
  {/* <p><Link to="/admin/project">create</Link> </p>*/}
  <Button variant="light"><Link to="/admin/project">create</Link></Button>
  {projectDetails && projectDetails.map((item)=>(
   <>
    <div className='innerc' style={{border:"2px solid black"}}>
    <p>{item._id}</p>
    <p>{item.title}</p>

    <p>{item.demo_URL}</p>
    <p>{item.github_URL}</p>

    {/* <p><Link to={`/admin/projectEdit`} >Edit</Link></p> */}
    {/* <Link to={`/admin/projectDetails${params.getValue(params.id, "id")}`}>
             
            </Link> */}

    {/* <p><Link to={`/admin/del`}>delete</Link></p> */}
            <Button
            variant="light"
              onClick={() =>
                deleteProjectHandler(params.getValue(params.id, "id"))
              }
            >
              Delete
              {/* <DeleteIcon /> */}
            </Button>
    </div>

   </>
  ))}
</div>
  </>
};

export default SelfAdminList;
