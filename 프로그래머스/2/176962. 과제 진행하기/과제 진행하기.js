function getTime(time) {
    const [h, s] = time.split(":").map(it => parseInt(it))
    return h * 60 + s
}

function solution(plans) {
    const answer = [];
    const pause = [];
    const sortedPlans = plans.map(it => {
        const [task, start, playtime] = it;
        return [task, getTime(start), parseInt(playtime)]
    }).sort((a, b) => a[1] - b[1]);
    
    while(sortedPlans.length > 0) {
        const newPlan = sortedPlans.shift();
        
        if (answer.length === 0) {
            answer.push(newPlan)
            continue
        }
        
        const curPlan = answer.pop();
        
        if (curPlan[1] + curPlan[2] > newPlan[1]) {
            answer.push(newPlan);
            pause.push([curPlan[0], newPlan[1], curPlan[1] + curPlan[2] - newPlan[1]])
        } else {
            answer.push(curPlan)
            let time = curPlan[1] + curPlan[2]
            while (pause.length > 0) {
                const pausePlan = pause.pop();
                if (time + pausePlan[2] <= newPlan[1]) {
                    answer.push(pausePlan)
                    time += pausePlan[2]
                } else {
                    pausePlan[2] = pausePlan[2] - (newPlan[1] - time)
                    pause.push(pausePlan)
                    break
                }
            }
            answer.push(newPlan)
        }
    }
    
    while (pause.length > 0) {
        answer.push(pause.pop())
    }
    
    return answer.map(it => it[0]);
}