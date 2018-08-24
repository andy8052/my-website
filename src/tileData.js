import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import School from '@material-ui/icons/School';
import SendIcon from '@material-ui/icons/Send';
import Work from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';
import LaptopMac from '@material-ui/icons/LaptopMac';
import AccountCircle from '@material-ui/icons/AccountCircle';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="About Me" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <School />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Work />
      </ListItemIcon>
      <ListItemText primary="Work" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LaptopMac />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
  </div>
);
