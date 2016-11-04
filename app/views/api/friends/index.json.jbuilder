json.friends do json.array! @friends, :username end
json.pending do json.array! @pending, :username end
json.requesting do json.array! @requesting, :username end
# json.requesting do json.array! @users, :username end
