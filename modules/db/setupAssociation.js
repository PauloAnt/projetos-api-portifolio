// models/associations.js
import User from './User/User.js';
import Project from './Project/Project.js';

export default function setupAssociations() {

    User.hasMany(Project, {
        foreignKey: 'userId',
        as: 'projects',
        onDelete: 'CASCADE',
    });
    
    Project.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user',
    });
    
}
