// 169. Majority Element

var majorityElement = function(nums) {
    
    nums.sort((a,b) => a-b)

    let middle = Math.floor(nums.length/2)

    return nums[middle]
};