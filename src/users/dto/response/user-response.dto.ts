export interface UserResponse{
    _id: string;
    email: string;
}

/*To protect password we put in promise UserResponse with no password on it. 
Look at user service and user controller promise  */