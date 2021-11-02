import { Button } from '../Button/button.component'

export const TaskListItem = ({ text, onDelete }) => {
    return (
                <div>
                <li> {text} <Button onClick={onDelete}>Remove</Button></li>
                </div>
    )
  }