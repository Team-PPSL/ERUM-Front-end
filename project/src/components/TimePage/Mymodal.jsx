import { FaRegBell } from 'react-icons/fa';
import ReactModal from 'react-modal';

const Mymodal = ({ isOpen, onSubmit, onCancel }) => {
  const handleClickSubmit = () => {
    onSubmit();
  };
  const handleClickCancel = () => {
    onCancel();
  };
  return (
    <ReactModal
      style={{
        content: {
          width: '400px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f0faee',
          borderRadius: '30px',
          borderStyle: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        },
      }}
      isOpen={isOpen}
    >
      <div>모달 입니다.</div>
      <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};

export default Mymodal;
