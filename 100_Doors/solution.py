no_of_doors = int(input("No. of doors: "))
opened_doors = []

for i in range(1, int(no_of_doors ** 0.5) + 1):
    opened_doors.append(i * i)

print("Opened Doors:", opened_doors)