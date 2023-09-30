

const ConditionalRenderingUsingSwitch = () => {
    const status = false;
        switch (status) {
            case true:
                return (<><h1>Authenticated User</h1><button>Log Out</button></>) ;
            
            case false:
                return (<><h1>Authentication Failed</h1><button>Sign In</button></>) ;
            default:
                return null
        }
      
    
};

export default ConditionalRenderingUsingSwitch;