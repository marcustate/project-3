import axios from "axios";

export default {
    getDoctor: function() {
        return axios.get("/api/doctor");
    },
    getDoctor: function(id)  {
        return axios.get("/api/doctor/" + id);
    }, 
    deleteDoctor: function(id) {
        return axios.delete("/api/doctor/" + id);
    },
    saveDoctor: function(doctorData) {
        return axios.post("/api/doctor", doctorData);
    }
};