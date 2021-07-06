import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from 'react-textarea-autosize';

const defaultStyle = {
  display: 'block',
  overflow: 'hidden',
  resize: 'none',
  width: '100%',
  backgroundColor: 'mediumSpringGreen',
};

interface PipelineIRDialogProps {
  onSubmit: (content: string) => void;
}
export default function PipelineIRDialog({ onSubmit }: PipelineIRDialogProps) {
  const [open, setOpen] = React.useState(false);
  const pipelineContent = React.createRef();
  const [content, setContent] = React.useState('default');

  //   const onChange = (e) =>{ setContent({ value: e.target.value }};

  const onChange = (elem: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(elem.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleClose = () => {
    const local_content = document?.getElementById('pipelineContent')?.textContent;
    if (local_content) {
      setContent(local_content);
    }
    console.log('local_content ' + local_content);
    onSubmit(content);
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Submit Pipeline Definition
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Upload pipeline</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Parse Pipeline definition IR in JSON format here. The content will be saved as string to
            process as next step.
          </DialogContentText>
          <TextareaAutosize
            style={{ width: '100%' }}
            value={content}
            onChange={onChange}
            id='pipelineContent'
            aria-label='empty textarea'
            placeholder='Empty'
          />
          {/* <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
