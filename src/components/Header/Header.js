import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import cn from "classnames";
import { Modal } from "../Modal/Modal";
import { useAddUser } from "./useAddUser";
import { TextInput } from "../InputFields/TextInput";
import { SelectInput } from "../InputFields/SelectInput";
import { divisionsOfBD, userTypes } from "../../lib/coreconstants";

export const Header = () => {
  const {
    showModal,
    handleToggleModal,
    formik,
    districtsOfBD,
    userTypeIsEmployee,
  } = useAddUser();

  return (
    <>
      <header className={cn(styles.header)}>
        <nav className={cn("container", styles.nav)}>
          <Link to="/">Home</Link>

          <button
            type="button"
            className="button-success"
            onClick={handleToggleModal}
          >
            Add User
          </button>
        </nav>
      </header>

      <Modal visible={showModal} onClose={handleToggleModal} title="Add User">
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            type="text"
            name="first_name"
            label="First Name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
            error={formik.errors.first_name}
          />

          <TextInput
            type="text"
            name="last_name"
            label="Last Name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
            error={formik.errors.last_name}
          />

          <SelectInput
            name="user_type"
            label="User Type"
            options={userTypes}
            onChange={formik.handleChange}
            error={formik.errors.user_type}
          />

          {/* district & divisions only when user_type is employee */}
          {userTypeIsEmployee && (
            <>
              <SelectInput
                name="division"
                label="Division"
                options={divisionsOfBD}
                onChange={formik.handleChange}
                error={formik.errors.division}
              />

              <SelectInput
                name="district"
                label="District"
                options={districtsOfBD}
                onChange={formik.handleChange}
                error={formik.errors.district}
              />
            </>
          )}

          <button type="submit" className="button-wide button-success">
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};
