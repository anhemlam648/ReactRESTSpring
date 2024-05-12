package com.example.apispring.payloadreponse;

import com.example.apispring.dto.LoginDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginMesage {

    String message;
    Boolean status;
    private String name;
    public String getMessage(){return message;}

    public void setMessage(String message){this.message = message;}

    public Boolean getStatus(){return status;}

    public void setStatus(Boolean status){this.status = status;}

    @Override
    public String toString() {
        return "LoginMesage{" +
                "message='" + message + '\'' +
                ", status=" + status +
                ", name='" + name + '\'' +
                '}';
    }


}
