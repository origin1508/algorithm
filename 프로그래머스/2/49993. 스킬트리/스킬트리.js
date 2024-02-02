function solution(skill, skill_trees) {
    let answer = 0;
    const re = new RegExp(`[^${skill}]`, "g")
    
    for (let i = 0; i < skill_trees.length; i++) {
        const skillTree = skill_trees[i]
        const requiredSkill = skillTree.replace(re, "")
        
        if (skill.startsWith(requiredSkill)) answer++
    }
    return answer;
}