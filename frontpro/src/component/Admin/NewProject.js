import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
 import { clearErrors,createProjectAdmin} from '../../actions/projectAllaction';

import { useAlert } from 'react-alert';
import { Button } from 'react-bootstrap';
import { NEW_PROJECT_RESET } from '../../constants/projectAllConstants';

const NewProject = ({history}) => {

  const dispatch = useDispatch();
    const alert = useAlert();
    const { error, success } = useSelector(
      (state) =>state.newProject
      );
    const[title,setTitle] = useState("");
    // const[text,setText] = useState("");
    const[demo,setDemoUrl] = useState("");
    const[github,setGithubUrl] = useState("");

    const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Project Created Successfully");
      // history.push("/admin/projectDetails");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, alert, error, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    // myForm.set("text", text);
    myForm.set("demo",demo );
    myForm.set("github", github);
   
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProjectAdmin(myForm));
  };

  const createProjectImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return <>
 <div>
 <form
               className="createProjectForm"
               encType="multipart/form-data"
               onSubmit={createProductSubmitHandler}
               >
      <div>
              
              <input
                type="text"
                placeholder="Project title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
       </div>

       <div id="createProjectFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProjectImagesChange}
                multiple
              />
        </div>
        <div id="createProjectFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>
            {/* <div>
              
              <input
                type="text"
                placeholder="Project text"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div> */}

            <div>
              
              <input
                type="text"
                placeholder="Project demo url"
                required
                value={demo}
                onChange={(e) => setDemoUrl(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="text"
                placeholder="Project githhub url"
                required
                value={github}
                onChange={(e) => setGithubUrl(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              // disabled={loading ? true : false}
            >
              Add Project
            </Button>

   </form>
 </div>
  </>;
};

export default NewProject;
